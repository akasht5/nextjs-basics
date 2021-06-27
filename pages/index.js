/** @jsxImportSource theme-ui */
import { jsx } from '@theme-ui/presets'

export default function Home({ data }){
  return (
    <div sx={{  variant:'containers.page' }}>
      <h1>{data.title}</h1>
      <h3>{data.subtitle}</h3>
      <p>{data.desc}</p>
    </div>
  )
}

export function getStaticProps(){
  return {
    props : {
        data : {
          title : 'Notes taking app',
          subtitle : 'This is such a cool app !',
          desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quidem consequuntur tenetur reiciendis in maxime sequi esse reprehenderit iusto labore, nulla nisi neque tempore ipsam illum! Illo soluta architecto at.'
        }
    }
  }
}
