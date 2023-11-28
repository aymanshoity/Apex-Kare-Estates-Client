import { useContext } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SharedHeadings from "../SharedComponents/SharedHeadings";
import SingleApartment from "./SingleApartment";


import {useQuery} from '@tanstack/react-query'
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Appartments = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const axiosPublic=UseAxiosPublic()
    const {data: apartments=[],refetch}=useQuery({
        queryKey: ['apartments'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/apartments')
            console.log(res.data)
            return res.data
        }
    })

    const handleAgreement=(apartment)=>{
        console.log(apartment)
        if(user){
            const agreementRequest={
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
                floorNo:apartment.floorNo,
                blockName:apartment.blockName,
                apartmentNo:apartment.apartmentNo,
                rent:apartment.rent,
                date:new Date().toLocaleString().split(',')[0],
                role:"user",
                status:"Pending",
            }
            fetch('http://localhost:5000/agreementRequests', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(agreementRequest)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId){
                            Swal.fire("Agreement Request is sent Successfully");
                            refetch()
                            
                        }
                        
                    })


        }else{
            Swal.fire({
                title: "Please Login First",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Okay"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              });
        }

    }
    return (
        <div className="bg-[#ECF4D6] pt-40">
            
            <SharedHeadings heading={" Apartments"} subheading={"Welcome to the floor"} ></SharedHeadings>
            <div>
                {
                    apartments.map(apartment=><SingleApartment handleAgreement={handleAgreement} key={apartment._id} apartment={apartment}></SingleApartment>)
                }
            </div>

        </div>
    );
};

export default Appartments;