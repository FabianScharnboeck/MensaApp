import React from "react";
import { Block, Icon } from "framework7-react";
import { useState } from "react";
import { useEffect } from "react";
import {Row, Col} from "framework7-react";

const Dishes = function () {
    const [error, setError] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://openmensa.org/api/v2/canteens/196/days/"+new Date().toISOString().split("T")[0]+"/meals")
            .then(res => res.json())
            .then((result) => {
                setisLoaded(true);
                setItems(result)
            },
                (error) => {
                    setisLoaded(true)
                    setError(error)
                }
            )
    }, []);
    return (
        <Block strong>
            <Row><h1>Heutiges Angebot vom {new Date().toLocaleDateString()}</h1></Row>
            <div>
                <Row>
                        <Col><h3>Gericht <Icon material="restaurant"/></h3></Col>
                        <Col><h3>Kategorie <Icon material="category"/></h3></Col>
                        <Col><h3>Preis für Studenten <Icon material="credit_card"/></h3></Col>
                        <Col><h3>Mitarbeiter <Icon material="credit_card"/></h3></Col>
                        <Col><h3>Schüler <Icon material="credit_card"/></h3></Col>
                        <Col><h3>Sonstige <Icon material="credit_card"/></h3></Col>
                </Row>
                {items.map((item) => {
                    console.log(item.id, item.name, item.prices.students);
                    console.log(item.prices.students.toFixed(2).toString().replace('.',','));
                    return <Row>
                        <Col><p>{item.name}</p></Col>
                        <Col><p>{item.category}</p></Col>
                        <Col><p>{item.prices.students == null ? '0,00' : item.prices.students.toFixed(2).toString().replace('.',',')} €</p></Col>
                        <Col><p>{item.prices.employees == null ? '0,00' : item.prices.employees.toFixed(2).toString().replace('.',',')} €</p></Col>
                        <Col><p>{item.prices.pupils == null ? '0,00' : item.prices.pupils.toFixed(2).toString().replace('.',',')} €</p></Col>
                        <Col><p>{item.prices.others == null ? '0,00' : item.prices.others.toFixed(2).toString().replace('.',',')} €</p></Col>
                    </Row>
                })}
            </div>
        </Block>
    )
}

export default Dishes;