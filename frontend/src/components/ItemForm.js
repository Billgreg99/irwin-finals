import axios from "axios";
import React, { useEffect, useState } from "react";

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickName, setnickName] = useState('');
    const [motherName, setmotherName] = useState('');
    const [brotherName, setbrotherName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pwd, setpwd] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    useEffect (() => {
        if (item) {
            setFirstName(item.firstName);
            setMiddleName(item.middleName);
            setLastName(item.lastName);
            setnickName(item.nickName);
            setmotherName(item.motherName);
            setbrotherName(item.brotherName);
            setEmail(item.email);
            setPhone(item.phone);
            setpwd(item.pwd);
            setDateOfBirth(item.dateOfBirth);
            setPlaceOfBirth(item.placeOfBirth);
            setSex(item.sex);
            setCivilStatus(item.civilStatus);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.bloodType);
            setCitizenship(item.citizenShip);
            setResidentialAddress(item.residentialAddress);
            setZipCode(item.zipCode);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = { firstName, middleName, lastName, motherName, brotherName, phone,pwd,email, dateOfBirth, placeOfBirth, sex, civilStatus, height, weight, bloodType, citizenship, residentialAddress, zipCode };
        try {
             if (item){
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
             } else {
                await 
                axios.post('http://localhost:8000/api/items/', data);
             }
             onSuccess();
            } catch (error) {
               console.error('There was an error submitting the form!', error);
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" 
                    value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>

                <label>nickName:</label>
                    <input type="text" 
                    value={nickName} onChange={(e) => setnickName(e.target.value)} />
                </div>
                <div>

                <label>motherName:</label>
                    <input type="text" 
                    value={motherName} onChange={(e) => setmotherName(e.target.value)} />
                    </div>
                    <div>
                 
                 <label>brotherName:</label>
                    <input type="text" 
                    value={brotherName} onChange={(e) => setbrotherName(e.target.value)} />
                </div>
                <div>
                
                    
                    <label>Mobile No.:</label>
                    <input type="text" 
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>


                <label>pwd.:</label>
                    <input type="text" 
                    value={pwd} onChange={(e) => setpwd(e.target.value)} />
                </div>
                <div>

                    <label>Email Address:</label>
                    <input type="text" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Date Of Birth:</label>
                    <input type="text" 
                    value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Place Of Birth:</label>
                    <input type="text" 
                    value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" 
                    value={sex} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" 
                    value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
                </div>
                <div>
                    <label>Height:</label>
                    <input type="text" 
                    value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="text" 
                    value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" 
                    value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
                </div>
                <div>
                    <label>Citizenship:</label>
                    <input type="text" 
                    value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
                </div>
                <div>
                    <label>Residential Address:</label>
                    <input type="text" 
                    value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" 
                    value={zipCode} 
                    onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
                <button type="delete">delete</button>
            </form>
        );
};
export default ItemForm;