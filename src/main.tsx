import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//экземпляр для использования в провайдере
const queryClient = new QueryClient({
	//глобальные настройки для экземпляра
	defaultOptions: {
		//запросы обычные get
		queries: {
			//повторный запрос при смене фокуса окон
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
