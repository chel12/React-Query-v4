import { useQuery } from '@tanstack/react-query';
import todoService from './services/todo.service';

function App() {
	//1 получить данные с сервера, понять где находится и API
	// как пример json placeholder API. Ответ приходит в data. [] ключ .
	//select позволяет после получения даты трансформировать их на этапе query, когда данные не пришли
	const { isLoading, data } = useQuery(
		['todos'],
		() => todoService.getAll(),
		{
			select: ({ data }) => data,
			onSuccess(data) {
				alert(data[0].title); //действия после запроса
			},
			onError(err) { // при ошибке
				alert(err);
			},
			// enabled:true //запрос по условию
			//retry: 10 кол-во запросов до показывания ошибки
		}
	);

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : data?.length ? (
				data.map((todo) => (
					<div>
						<b>{todo.id}</b>
						{todo.title}
					</div>
				))
			) : (
				<h1>Data not found </h1>
			)}
		</div>
	);
}

export { App };
