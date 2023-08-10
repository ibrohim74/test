import {$host} from "../http";

const getUser =async ()=>{
  const res = await $host.get('api/v1/')
}
export const data = [
  {
    id: 1,
    name: "Behzod",
    name2: "Abdullaev",
    tel: "+998998905444",
    companyName: "IT park",
    jobName: "Head of Digital Technology Department",
    instagram: "",
    telegram: "https://t.me/s/rinzler_0101",
    linkedin: "",
    facebook: "",
    avatar: require("../assets/img/dev.jpeg"),
  },
];
