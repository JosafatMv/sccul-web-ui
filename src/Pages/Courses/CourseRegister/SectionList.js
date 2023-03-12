import styles from '../../../assets/css/Pages/Courses/CourseRegister/SectionList.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { SectionItem } from './SectionItem';
import { useState } from 'react';

export const SectionList = ({ sections }) => {
	const [sectionsList, setSectionsList] = useState(sections);

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
	};

	return (
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
								key={section.id.toString()}
								draggableId={section.id.toString()}
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
	);
};
