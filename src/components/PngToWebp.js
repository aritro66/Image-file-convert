import React, { useState, useRef } from 'react';
import { Form, Button ,Modal} from 'react-bootstrap';
import ConvertImage from "react-convert-image";

export default function PngToWebp() {
    const [convert, setConvert] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [convImage, setConvImage] = useState("")
    const inputEl = useRef(null);

    function handleConvertedImage(url) {
        setConvImage(url);
        // console.log(url);
    }

    function handleForm(e) {
        e.preventDefault();
        if (inputEl.current.files[0].name.search(".png") !== -1) {
            setConvert(true);
            setImageUrl(URL.createObjectURL(inputEl.current.files[0]));
        }
        else {
            setConvert(false);
            setShowModal(true);
        }

    }
    function closeModal() {
        setShowModal(false);
    }

    function resetForm() {
        setConvert(false);
        setImageUrl("");
    }

    return (
        <div className="convert-layout">
            <h2>PNG TO WEBP</h2>
            <Form onSubmit={handleForm} onReset={resetForm}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose PNG File</Form.Label>
                    <Form.Control type="file" ref={inputEl} required accept=".png" />
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                    Submit
                </Button>
                <Button variant="danger" size="lg" type="reset">
                    Reset
                </Button>
            </Form>
            {
                convert && <>
                <div style={{display:"none"}}> 
                <ConvertImage
                    image={imageUrl}
                    onConversion={handleConvertedImage}
                    format="webp"
                />
                </div>
                <img src={imageUrl} alt="" style={{height:"100px",width:"100px",margin:"10px 0"}} />
                <br/>
                <a href={convImage} download>Download</a>
                </>
            }
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>File Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please choose PNG file</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>

        </div>
    )
}
