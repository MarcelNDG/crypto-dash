import { Link } from "react-router";

const NotFoundPage = () => {

    const style = {
        header: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4rem 2rem',            
            borderRadius: '8px',
        },
        Title: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '3.5rem',
        },
        Text: {
            color: 'white',
            padding: '1rem 0',
            fontSize: '1.2rem',
        },
        LinkBtn:{
            color: '#61dafb',
            padding: '1rem 0',
            textDecoration: 'none',
            fontSize: '1.5rem',
        }
    };

    
    return (
        <>
        <div style={style.header}>
            <h1 style={style.Title}>404 - Page Not Found</h1>
            <p style={style.Text}>Sorry, the page you are looking for does not exist.</p>
            <h1 style={style.LinkBtn}>← Go <Link to="/" style={style.LinkBtn}>Home</Link></h1>
        </div>
        </> 
     

);
}
 
export default NotFoundPage;