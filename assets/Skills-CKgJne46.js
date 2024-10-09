import{j as e,C as g,a as m,b as p,c as h,r as a,T as w,d as f,e as C,f as S,m as b}from"./index-BdM-iD10.js";const j=[{title:"React Component Example",description:"This is a basic example of a functional React component that manages state and handles events.",code:`import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;`},{title:"Node.js HTTP Server",description:'A simple HTTP server built using Node.js that responds with "Hello, World!".',code:`const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});`},{title:"CSS Flexbox Example",description:"This example demonstrates how to use CSS Flexbox to center content both vertically and horizontally.",code:`.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    width: 200px;
    height: 200px;
    background-color: #4caf50;
}`},{title:"Fetching Data with React (useEffect)",description:"This example shows how to fetch data from an API using React's useEffect and useState hooks.",code:`import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <ul>
            {data.slice(0, 10).map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default DataFetchingComponent;`},{title:"MySQL Database Query with Node.js",description:"A basic MySQL database query using Node.js and the mysql package.",code:`const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect();

connection.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    console.log(results);
});

connection.end();`},{title:"JWT Authentication in Node.js",description:"A basic example of JWT authentication using Node.js and the jsonwebtoken package.",code:`const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = 'mysecretkey';

app.post('/login', (req, res) => {
    const user = { id: 1, username: 'testuser' };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) return res.sendStatus(403);
            res.json({ message: 'This is a protected route', decoded });
        });
    } else {
        res.sendStatus(403);
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});`},{title:"Tailwind CSS Responsive Grid",description:"A simple example of using Tailwind CSS to create a responsive grid layout.",code:`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-blue-500">Item 1</div>
    <div class="bg-blue-500">Item 2</div>
    <div class="bg-blue-500">Item 3</div>
    <div class="bg-blue-500">Item 4</div>
</div>`}],y=({theme:o})=>e.jsxs("div",{className:"p-6 max-w-4xl mx-auto text-black",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-black",children:"Code Samples"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:j.map((s,l)=>e.jsxs(g,{className:`cursor-pointer hover:shadow-lg transition-shadow ${o==="dark"?"bg-gray-800":"bg-gray-100"}`,children:[e.jsx(m,{children:e.jsx(p,{children:s.title})}),e.jsxs(h,{children:[e.jsx("p",{children:s.description}),e.jsx("pre",{className:"bg-gray-100 p-2 rounded overflow-x-auto",children:e.jsx("code",{children:s.code})})]})]},l))})]}),L="data:image/svg+xml,%3csvg%20fill='%231572B6'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eCSS3%3c/title%3e%3cpath%20d='M1.5%200h21l-1.91%2021.563L11.977%2024l-8.565-2.438L1.5%200zm17.09%204.413L5.41%204.41l.213%202.622%2010.125.002-.255%202.716h-6.64l.24%202.573h6.182l-.366%203.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29%203.855L12%2019.288l5.373-1.53L18.59%204.414z'/%3e%3c/svg%3e",z="data:image/svg+xml,%3csvg%20fill='%23000000'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eExpress%3c/title%3e%3cpath%20d='M24%2018.588a1.529%201.529%200%2001-1.895-.72l-3.45-4.771-.5-.667-4.003%205.444a1.466%201.466%200%2001-1.802.708l5.158-6.92-4.798-6.251a1.595%201.595%200%20011.9.666l3.576%204.83%203.596-4.81a1.435%201.435%200%20011.788-.668L21.708%207.9l-2.522%203.283a.666.666%200%20000%20.994l4.804%206.412zM.002%2011.576l.42-2.075c1.154-4.103%205.858-5.81%209.094-3.27%201.895%201.489%202.368%203.597%202.275%205.973H1.116C.943%2016.447%204.005%2019.009%207.92%2017.7a4.078%204.078%200%20002.582-2.876c.207-.666.548-.78%201.174-.588a5.417%205.417%200%2001-2.589%203.957%206.272%206.272%200%2001-7.306-.933%206.575%206.575%200%2001-1.64-3.858c0-.235-.08-.455-.134-.666A88.33%2088.33%200%20010%2011.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944%202.094-5.071%205.264z'/%3e%3c/svg%3e",T="data:image/svg+xml,%3csvg%20fill='%23F05032'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGit%3c/title%3e%3cpath%20d='M23.546%2010.93L13.067.452c-.604-.603-1.582-.603-2.188%200L8.708%202.627l2.76%202.76c.645-.215%201.379-.07%201.889.441.516.515.658%201.258.438%201.9l2.658%202.66c.645-.223%201.387-.078%201.9.435.721.72.721%201.884%200%202.604-.719.719-1.881.719-2.6%200-.539-.541-.674-1.337-.404-1.996L12.86%208.955v6.525c.176.086.342.203.488.348.713.721.713%201.883%200%202.6-.719.721-1.889.721-2.609%200-.719-.719-.719-1.879%200-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636%203.7.45%2010.881c-.6.605-.6%201.584%200%202.189l10.48%2010.477c.604.604%201.582.604%202.186%200l10.43-10.43c.605-.603.605-1.582%200-2.187'/%3e%3c/svg%3e",k="data:image/svg+xml,%3csvg%20fill='%23E34F26'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eHTML5%3c/title%3e%3cpath%20d='M1.5%200h21l-1.91%2021.563L11.977%2024l-8.564-2.438L1.5%200zm7.031%209.75l-.232-2.718%2010.059.003.23-2.622L5.412%204.41l.698%208.01h9.126l-.326%203.426-2.91.804-2.955-.81-.188-2.11H6.248l.33%204.171L12%2019.351l5.379-1.443.744-8.157H8.531z'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20fill='%23F7DF1E'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eJavaScript%3c/title%3e%3cpath%20d='M0%200h24v24H0V0zm22.034%2018.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84%201.515-.66.39.12.75.42.976.9%201.034-.676%201.034-.676%201.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71%201.005-1.14%201.291-.811%203.541.569%204.471%201.365%201.02%203.361%201.244%203.616%202.205.24%201.17-.87%201.545-1.966%201.41-.811-.18-1.26-.586-1.755-1.336l-1.83%201.051c.21.48.45.689.81%201.109%201.74%201.756%206.09%201.666%206.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0%201.938-.009%203.864-.009%205.805%200%201.232.063%202.363-.138%202.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825%201.125c.305.63.75%201.172%201.324%201.517.855.51%202.004.675%203.207.405.783-.226%201.458-.691%201.811-1.411.51-.93.402-2.07.397-3.346.012-2.054%200-4.109%200-6.179l.004-.056z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20fill='%234479A1'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eMySQL%3c/title%3e%3cpath%20d='M16.405%205.501c-.115%200-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77%2018.695h-.927a50.854%2050.854%200%2000-.27-4.41h-.008l-1.41%204.41H2.45l-1.4-4.41h-.01a72.892%2072.892%200%2000-.195%204.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335%204.064h.008l1.347-4.064h1.095c.242%202.015.384%203.86.428%205.53zm4.017-4.08c-.378%202.045-.876%203.533-1.492%204.46-.482.716-1.01%201.073-1.583%201.073-.153%200-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268%200%20.483-.075.647-.222.197-.18.295-.382.295-.605%200-.155-.077-.47-.23-.944L6.23%2014.615h.91l.727%202.36c.164.536.233.91.205%201.123.4-1.064.678-2.227.835-3.483zm12.325%204.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253%200-1.83-.718-2.746-2.155-2.746-.704%200-1.254.232-1.65.697-.43.508-.646%201.256-.646%202.245%200%20.972.19%201.686.574%202.14.35.41.877.615%201.583.615.264%200%20.506-.033.725-.098l1.325.772.36-.622zM15.5%2017.588c-.225-.36-.337-.94-.337-1.736%200-1.393.424-2.09%201.27-2.09.443%200%20.77.167.977.5.224.362.336.936.336%201.723%200%201.404-.424%202.108-1.27%202.108-.445%200-.77-.167-.978-.5zm-1.658-.425c0%20.47-.172.856-.516%201.156-.344.3-.803.45-1.384.45-.543%200-1.064-.172-1.573-.515l.237-.476c.438.22.833.328%201.19.328.332%200%20.593-.073.783-.22a.754.754%200%2000.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177%200-.45.157-.81.47-1.085.315-.278.72-.415%201.22-.415.512%200%20.98.136%201.4.41l-.213.476a2.726%202.726%200%2000-1.064-.23c-.283%200-.502.068-.654.206a.685.685%200%2000-.248.524c0%20.328.234.61.666.85.393.215%201.187.67%201.187.67.433.305.648.63.648%201.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223%203.223%200%2000-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867%208.867%200%2000-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69%2017.69%200%2001-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422%201.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146%201.693.194%202.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445%203.445%200%2001-.35-.4%208.76%208.76%200%2001-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188%201.01-.027.007-.014%200-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478%202.478%200%2001-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953%205.953%200%20012.085%202.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20fill='%235FA04E'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eNode.js%3c/title%3e%3cpath%20d='M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383%20c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076%20c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0%20L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392%20c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021%20c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921%20c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603%20v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z%20M19.099,13.993%20c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233%20c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081%20c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833%20c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402%20c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253%20c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z'/%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20fill='%23CB3837'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3enpm%3c/title%3e%3cpath%20d='M1.763%200C.786%200%200%20.786%200%201.763v20.474C0%2023.214.786%2024%201.763%2024h20.474c.977%200%201.763-.786%201.763-1.763V1.763C24%20.786%2023.214%200%2022.237%200zM5.13%205.323l13.837.019-.009%2013.836h-3.464l.01-10.382h-3.456L12.04%2019.17H5.113z'/%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20fill='%23412991'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eOpenAI%3c/title%3e%3cpath%20d='M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.0729zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.872zm16.5963%203.8558L13.1038%208.364%2015.1192%207.2a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.0742a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.459a.7948.7948%200%200%200-.3927.6813zm1.0976-2.3654l2.602-1.4998%202.6069%201.4998v2.9994l-2.5974%201.4997-2.6067-1.4997Z'/%3e%3c/svg%3e",F="/assets/react-CHdo91hT.svg",B="data:image/svg+xml,%3csvg%20fill='%2306B6D4'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eTailwind%20CSS%3c/title%3e%3cpath%20d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624%20C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624%20C16.337,6.182,14.976,4.8,12.001,4.8z%20M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624%20c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624%20C10.337,13.382,8.976,12,6.001,12z'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20fill='%23E95420'%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eUbuntu%3c/title%3e%3cpath%20d='M17.61.455a3.41%203.41%200%200%200-3.41%203.41%203.41%203.41%200%200%200%203.41%203.41%203.41%203.41%200%200%200%203.41-3.41%203.41%203.41%200%200%200-3.41-3.41zM12.92.8C8.923.777%205.137%202.941%203.148%206.451a4.5%204.5%200%200%201%20.26-.007%204.92%204.92%200%200%201%202.585.737A8.316%208.316%200%200%201%2012.688%203.6%204.944%204.944%200%200%201%2013.723.834%2011.008%2011.008%200%200%200%2012.92.8zm9.226%204.994a4.915%204.915%200%200%201-1.918%202.246%208.36%208.36%200%200%201-.273%208.303%204.89%204.89%200%200%201%201.632%202.54%2011.156%2011.156%200%200%200%20.559-13.089zM3.41%207.932A3.41%203.41%200%200%200%200%2011.342a3.41%203.41%200%200%200%203.41%203.409%203.41%203.41%200%200%200%203.41-3.41%203.41%203.41%200%200%200-3.41-3.41zm2.027%207.866a4.908%204.908%200%200%201-2.915.358%2011.1%2011.1%200%200%200%207.991%206.698%2011.234%2011.234%200%200%200%202.422.249%204.879%204.879%200%200%201-.999-2.85%208.484%208.484%200%200%201-.836-.136%208.304%208.304%200%200%201-5.663-4.32zm11.405.928a3.41%203.41%200%200%200-3.41%203.41%203.41%203.41%200%200%200%203.41%203.41%203.41%203.41%200%200%200%203.41-3.41%203.41%203.41%200%200%200-3.41-3.41z'/%3e%3c/svg%3e",i=[{name:"HTML5",category:"Frontend",logo:k},{name:"CSS3",category:"Frontend",logo:L},{name:"JavaScript",category:"Frontend",logo:E},{name:"React",category:"Frontend",logo:F},{name:"Tailwind CSS",category:"Frontend",logo:B},{name:"Node.js",category:"Backend",logo:N},{name:"Express.js",category:"Backend",logo:z},{name:"MySQL",category:"Backend",logo:M},{name:"Ubuntu",category:"Backend",logo:R},{name:"Git",category:"Version Control",logo:T},{name:"NPM",category:"Tools",logo:A},{name:"OpenAI",category:"AI",logo:H}],q=["All",...new Set(i.map(o=>o.category))],I=({theme:o})=>{const[s,l]=a.useState("All"),[c,u]=a.useState(null),r=a.useRef(null);a.useEffect(()=>{r.current&&(r.current.scrollTop=0)},[s]);const x=s==="All"?i:i.filter(t=>t.category===s),v=[{title:"React Component Example",description:"This is a basic example of a functional React component that manages state and handles events.",code:`import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;`},{title:"Node.js HTTP Server",description:'A simple HTTP server built using Node.js that responds with "Hello, World!".',code:`const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});`},{title:"CSS Flexbox Example",description:"This example demonstrates how to use CSS Flexbox to center content both vertically and horizontally.",code:`.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    width: 200px;
    height: 200px;
    background-color: #4caf50;
}`}],d=t=>v.find(n=>n.title.toLowerCase().includes(t.toLowerCase()));return e.jsxs("div",{className:`p-6 max-w-4xl mx-auto ${o==="dark"?"text-white":"text-black"}`,children:[e.jsxs(w,{defaultValue:"All",onValueChange:t=>l(t),children:[e.jsx("div",{className:"rounded-md shadow-md p-4 top-0 z-50",children:e.jsx(f,{className:"grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center",children:q.map(t=>e.jsx(C,{value:t,"aria-controls":`panel-${t}`,className:"px-5 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300",children:t},t))})}),e.jsx(S,{value:s,className:"mt-20 md:mt-8",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:x.map((t,n)=>e.jsx(b.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:n*.1},onClick:()=>u(t),children:e.jsxs(g,{className:`cursor-pointer hover:shadow-lg transition-shadow ${o==="dark"?"bg-gray-800":"bg-white"} p-4`,children:[e.jsx(m,{children:e.jsxs(p,{className:"flex items-center space-x-3 md:space-x-4",children:[e.jsx("img",{src:t.logo,alt:`${t.name} logo`,className:"w-6 h-6"}),e.jsx("span",{children:t.name})]})}),e.jsx(h,{children:e.jsxs("p",{className:"mb-2 text-sm",children:["Category: ",t.category]})})]})},t.name))})})]}),c&&e.jsxs("div",{className:"mt-12",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:`Code Example for ${c.name}`}),d(c.name)?e.jsx(y,{theme:o,codeSamples:[d(c.name)]}):e.jsx("p",{children:"No code sample available for this skill."})]})]})};export{I as default};
