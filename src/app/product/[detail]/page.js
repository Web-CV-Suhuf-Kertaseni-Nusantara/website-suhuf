'use client'
import { useEffect, useState } from 'react';

// const fs = require('fs');
// const path = require('path');

export default function Detail({ params }) {
    const [product, setProduct] = useState();
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const res = await fetch(`http://localhost:5000/product/slug/${params.detail}`)
        const data = await res.json();
        setProduct(data)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    }

    return (
        <>
            {product &&

                <h1>{product.name}</h1>
            }
        </>
    )
}

// async function getData() {
//     const filePath = path.join(process.cwd(), 'data.json');
//     const fileData = await fs.promises.readFile(filePath, 'utf-8');
//     const data = JSON.parse(fileData);

//     return data;
// }