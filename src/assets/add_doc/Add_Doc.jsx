import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function Add_file(props){
    const divStyle = {

        display: props.display,      
      };
    const image_path = "https://cdn-icons-png.flaticon.com/512/2270/2270665.png"
    return (
        <div style={divStyle} className='add_doc'>
            <h3 className='mb-5'>Drop your file Please</h3>
            <Button component="label" variant="contained">
                Upload file
                <VisuallyHiddenInput type="file" />
             </Button>
        </div>
    );f
}