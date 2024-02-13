import React from "react";
import PersonalInjury from '../assets/images/serviceImages/1.svg'
import PersonalInjuryShade from '../assets/images/serviceImages/11.svg'
import MotorVehicle from '../assets/images/serviceImages/2.svg'
import MotorVehicleShade from '../assets/images/serviceImages/22.svg'
import TruckingAccidents from '../assets/images/serviceImages/3.svg'
import TruckingAccidentsShade from '../assets/images/serviceImages/33.svg'
import WrongfulDeath from '../assets/images/serviceImages/4.svg'
import WrongfulDeathShade from '../assets/images/serviceImages/44.svg'
import WorkersComp from '../assets/images/serviceImages/5.svg'
import WorkersCompShade from '../assets/images/serviceImages/55.svg'
import CarAccident from '../assets/images/serviceImages/6.svg'
import CarAccidentShade from '../assets/images/serviceImages/66.svg'
import MotorcycleAccident from '../assets/images/serviceImages/7.svg'
import MotorcycleAccidentShade from '../assets/images/serviceImages/77.svg'
import PedestrianAccident from '../assets/images/serviceImages/8.svg'
import PedestrianAccidentShade from '../assets/images/serviceImages/88.svg'
import Image from "next/image";
import { ServiceIcon } from "./ServiceIcon";


export const Services = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 px-16">
        <ServiceIcon service={PersonalInjury} serviceShade={PersonalInjuryShade} name={'Personal Injury'}/>
        <ServiceIcon service={MotorVehicle} serviceShade={MotorVehicleShade} name={'Motor Vehicle'}/>
        <ServiceIcon service={TruckingAccidents} serviceShade={TruckingAccidentsShade} name={'Trucking Accidents'}/>
        <ServiceIcon service={WrongfulDeath} serviceShade={WrongfulDeathShade} name={'Wrongful Death'}/>
        <ServiceIcon service={WorkersComp} serviceShade={WorkersCompShade} name={'Workers Compensation'}/>
        <ServiceIcon service={CarAccident} serviceShade={CarAccidentShade} name={'Car Accident'}/>
        <ServiceIcon service={MotorcycleAccident} serviceShade={MotorcycleAccidentShade} name={'Motorcycle Accident'}/>
        <ServiceIcon service={PedestrianAccident} serviceShade={PedestrianAccidentShade} name={'Pedestrian Accident'}/>




      
    </div>
  );
};
