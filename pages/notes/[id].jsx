/** @jsxImportSource theme-ui */
import { jsx } from '@theme-ui/presets'
import Link from 'next/link'

const Note = ({ note }) => {
    const { id,title } = note;    
    return(
        <>
        <div sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', variant:'containers.page' }}>
            <h1>Note {id}</h1>
            <Link href='/notes'>
                <a sx={{ color:'text', cursor:'pointer' }}>Back</a>
            </Link>
        </div>
        <p sx={{ variant:'containers.page'}}>{title}</p>
        </>
    )
}

export async function getServerSideProps({ params,req,res }){
    const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

    if(!response.ok){
        response.writeHead(302, {Location: '/notes'});
        response.end();
        return {props : {}}
    }

    const { data } = await response.json();

    if(data){
        return{
            props : {
                note: data
            }
        }
    }
}

export default Note