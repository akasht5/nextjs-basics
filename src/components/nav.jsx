/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
    <header sx={{ width:'100vw', bg:'highlight', height:'60px' }}>
        <nav sx={{ display:'flex', justifyContent:'space-between',alignItems:'center', variant:'containers.page' ,height:'100%' }}>
            <Link href='/'>
                <a sx={{ fontWeight:'bold', cursor:'pointer', marginLeft:'25px' }}>Notes App</a>
            </Link>
            <Link href='/notes'>
                <a sx={{ fontWeight:'bold', cursor:'pointer', marginRight:'25px' }}>Notes</a>
            </Link>
        </nav>
    </header>
)

export default Nav