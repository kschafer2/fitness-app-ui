import React from 'react';

interface Exercise {
    id: string;
    name: string;
    description: string;
}

interface Props {
    userInput: string
}

const ExerciseSearch = ({userInput}: Props) => {
    const [data, setData] = React.useState<Exercise[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/exercise/getAll');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    console.error("Caught an unknown error:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (

        <ul>
            {filter(data, userInput).map(exercise => (
                <li key={exercise.id}>{exercise.name} | {exercise.description}</li>
            ))}
        </ul>
    );
};

function filter(exercises: Exercise[], searchTerm: string): Exercise[] {
    return exercises.filter((el) => {
        if (searchTerm === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(searchTerm)
        }
    });
}

export default ExerciseSearch;