import Image from "next/image";

export default function Banner() {
    return (
        <div>
            <Image src={'/img/cover1.jpg'}
            alt="cover"
            fill={true}
            objectFit="cover"/>
        </div>
    )
}