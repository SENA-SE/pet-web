import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone';

const Container = styled.div`
    width: 100%;
    min-height: 150px;
    background: ${({ theme }) => theme.status.bg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledSpan = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.palette.secondary.main};
`
const PreviewContainer = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    img {
        border-radius: 5px;
        width: 200px;
        object-fit: cover;
    }
`
function ImageUpload({ setValue, max = 9, ...rest }) {

    const [selectedImages, setSelectedImages] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        if (setValue) {
            setValue(
                acceptedFiles.map(file => (
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                ))
            )
        }
        setSelectedImages(acceptedFiles.map(file => (
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        )))
    }, [])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        maxFiles: max
    })
    const selected_images = selectedImages?.map((file, index) => (
        <div key={index}>
            <img src={file.preview} />
        </div>
    ))

    return (
        <Container>
            <div {...getRootProps()}>
                <input {...getInputProps()} {...rest} />
                <StyledSpan style={{ cursor: "pointer" }}>点击此处上传图片{max !== 1 && `，至多${max}张`}</StyledSpan><br />
            </div>
            {max !== 1 && <StyledSpan >(只接受 *.jpeg and *.png 格式图片)</StyledSpan>}

            <PreviewContainer>
                {selected_images}
            </PreviewContainer>
        </Container>

    );

}
export default ImageUpload


