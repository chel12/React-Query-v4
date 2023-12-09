import { useQuery } from '@tanstack/react-query';
import todoService from '../services/todo.service';

export const useTodos = () => {
	// return useQuery(['todos'], () => todoService.getAll(), {
	// 	//сразу возвращаем
	// 	select: ({ data }) => data,
	// });
	const todoId = 1;
	return useQuery(
		['todos', todoId],
		() => todoService.getById(todoId.toString()),
		{
			//сразу возвращаем
			select: ({ data }) => data,
			enabled: !!todoid, //перевод !! в булевое и если нет id тогда запроса не будет
		}
	);
};
//кастом хук
