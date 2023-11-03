import { Layout } from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
          ></Image>
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt2 text-gray-600">city A</p>Udemy
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-cold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
        <div className="my-6 flex justify-around"></div>
      </div>
    </Layout>
  );
};

export default Contact;
