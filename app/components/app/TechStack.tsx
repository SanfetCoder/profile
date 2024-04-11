import Card from "../reusable/Card";
import Image from "next/image";
import {v4} from "uuid";

const frontendImages = [
  "/techstacks/logo-html.png",
  "/techstacks/logo-css.jpeg",
  "/techstacks/logo-javascript.png",
  "/techstacks/logo-react.png",
  "/techstacks/logo-next.png",
  "/techstacks/logo-tailwind.jpeg",
]

const backendImages = [
  "/techstacks/logo-node.png",
  "/techstacks/logo-python.png",
  "/techstacks/logo-socket.png",
  "/techstacks/logo-fastapi.png",
  "/techstacks/logo-express.png",
  "/techstacks/logo-flask.png",
]

const databaseImages = [
  "/techstacks/logo-mongodb.png",
  "/techstacks/logo-supabase.jpeg",
  "/techstacks/logo-s3.png",
]

export const TechStack : React.FC<{
  language : string
}>
 = ({language}) => {
  
  return(
    <div className="flex flex-col gap-y-10 items-center mt-16">
    <h1 className="text-white lg:text-4xl text-2xl font-semibold">{language === 'eng' ? 'Tech Stacks' : 'เทคโนโลยีที่ใช้'}</h1>
    <section className="flex lg:flex-row flex-col gap-y-10 items-center gap-x-16">
      <Card>
        <h1 className="text-red-400 font-bold text-3xl">{language === 'eng' ? 'Front End' : 'หน้าบ้าน'}</h1>
        <div className="grid grid-cols-3 items-center gap-y-10 gap-x-8 mt-10">
          {frontendImages.map(imageSrc => 
            <Image alt={imageSrc.split("/")[2]} key={v4()} height={100} width={100} src={imageSrc}/>
            )}
        </div>
      </Card>
      <Card>
        <h1 className="text-red-400 font-bold text-3xl">{language === 'eng' ? 'Back End' : 'หลังบ้าน'}</h1>
        <div className="grid grid-cols-3 items-center gap-y-10 gap-x-8 mt-10">
          {backendImages.map(imageSrc => 
            <Image alt={imageSrc.split("/")[2]} key={v4()} height={100} width={100} src={imageSrc}/>
            )}
        </div>
      </Card>
      <Card>
        <h1 className="text-red-400 font-bold text-3xl">{language === 'eng' ? 'Databases' : 'ฐานข้อมูล'}</h1>
        <div className="grid grid-cols-3 items-center gap-y-10 gap-x-8 mt-10">
          {databaseImages.map(imageSrc => 
            <Image alt={imageSrc.split("/")[2]} key={v4()} height={100} width={100} src={imageSrc}/>
            )}
        </div>
      </Card>
    </section>
    </div>
  )
}

