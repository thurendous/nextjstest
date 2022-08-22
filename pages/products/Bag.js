
import { useRouter } from "next/router";

export const Bag = () => {
    const router = useRouter();
    console.log(router.query)
  return (
    <div>{router.query.name}ックのページです</div>
  )
}

export default Bag

