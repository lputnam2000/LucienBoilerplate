'use client';

import { trpc } from '../lib/trpc/client';

export default function Greeting() {
    const { data, isLoading } = trpc.user.getUser.useQuery({ id: '1' });

    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data</div>;

    return (
        <div>
            <p>User: {data.name}</p>
        </div>
    );
}
