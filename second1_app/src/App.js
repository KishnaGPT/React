import { Header, AvengersClass, Footer } from "./First";

export function Display(){
  return <>
    <Header name="Avengers"/>
    <AvengersClass fname="Steve" lname="Roger" name="Captain America"/>
    <AvengersClass fname="Bruce" lname="Banner" name="Hulk"/>
    <AvengersClass fname="Tony" lname="Stark" name="Iron Man"/>
    <AvengersClass fname="Thor" lname="Odin" name="God of Thunder"/>
    <AvengersClass fname="Stiphen" lname="Strange" name="Dr.Strange"/>
    <AvengersClass fname="Peter" lname="Parker" name="Spider-Man"/>
    <Footer/>
  </>
}