import { useState, useEffect } from "react";
import axios from "axios";

interface Data {
    id: number;
    title: string;
    body: string;
}

const DataFetcher: React.FC = () => {
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get<Data[]>(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                setData(response.data);
            } catch (err) {
                setError("Помилка завантаження даних");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Завантаження даних...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Отримані дані:</h2>
            <ul>
                {data?.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
