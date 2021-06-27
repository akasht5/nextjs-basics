/** @jsxImportSource theme-ui */
import { jsx } from '@theme-ui/presets'
import Link from 'next/link'

const Notes = ({ data }) => {
    return(
        <div sx={{ variant:'containers.page', }}>
            <h1>All Notes</h1>
            <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            {
                data.map(note => (
                    <div sx={{width: '33%' }} key={note.id}>
                      <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                        <a sx={{textDecoration: 'none', cursor: 'pointer' }}>
                          <div sx={{variant: 'containers.card',padding:'15px', margin:'10px' }}>
                            <strong>{`Note ${note.id}`}</strong>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))
            }
            </div>
        </div>
    )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return {
    props : {
      data
    }
  }
}


export default Notes