const fs = require('fs');
const path = require('path');

export default function Detail() {
    return(
        <>
            <h1>Haha</h1>
        </>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data.json');
    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    return data;
}