import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://fast-stream-29838.herokuapp.com/addEvent`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '69657e9467762f551eaa7591345e6ccb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Container className="mt-5">
            <Button className="m-2" variant="success">Add Product</Button>
            <Button className="m-2" variant="info">Manage Product</Button>
            <br/>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="" placeholder="Product Name" ref={register} />
                <br />
                <br />

                <input name="price" defaultValue="" placeholder="Product Price" ref={register} />
                <br />
                <br />

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <br />

                <input type="submit" />
            </form>
        </Container>
    );
};

export default Admin;