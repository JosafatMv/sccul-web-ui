import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { SectionItem } from './SectionItem';

import styles from '../../../assets/css/Pages/Courses/CourseRegister/SectionList.module.css';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

export const SectionList = ({
	sections,
	setFieldValue,
	setSections,
	...props
}) => {
	const [sectionsList, setSectionsList] = useState(sections);
	const [, meta] = useField(props);

	useEffect(() => {
		setSectionsList(sections);
	}, [sections]);

	const handleDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const sourceIndex = result.source.index;
		const destinationIndex = result.destination.index;

		const newSectionsList = Array.from(sectionsList);
		const [removed] = newSectionsList.splice(sourceIndex, 1);
		newSectionsList.splice(destinationIndex, 0, removed);

		newSectionsList.forEach((section, index) => {
			section.number = index + 1;
		});

		setSectionsList(newSectionsList);
		setFieldValue('sections', newSectionsList);
	};

	const handleRemoveSection = (number) => {
		const newSectionsList = sectionsList.filter(
			(section) => section.number !== number
		);

		newSectionsList.forEach((section, index) => {
			section.number = index + 1;
		});

		setSectionsList(newSectionsList);
		setSections(newSectionsList);
		setFieldValue('sections', newSectionsList);
	};

	return (
		<>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId='section-list'>
					{(provided) => (
						<ul
							className={styles.courseContentList}
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{sectionsList.map((section, index) => (
								<Draggable
									key={section.name.toString()}
									draggableId={section.name.toString()}
									index={index}
								>
									{(provided) => (
										<li
											className='mb-2'
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<SectionItem
												name={section.name}
												number={section.number}
												duration={section.duration}
												handleRemoveSection={
													handleRemoveSection
												}
											/>
										</li>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>

			{!!meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid' className='d-block mb-3'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
