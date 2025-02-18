import React from "react";
import Navbars from "../components/Navbar";
import { Row, Col, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import '../sass/_weatherDashboard.scss';
import clearSky from '../assets/clear-sky.png';

//icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiCalendarDateRange } from "react-icons/hi2";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { MdDewPoint } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { CgPushDown } from "react-icons/cg";

function WeatherDashboard() {
    return (
        <>
            <Navbars/>
            <div className="weather-dashboard">
                <Row className="g-3">
                    <Col md={6}>
                        <Card className="weather-main-card">
                            <Card.Body>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2>Chiang Mai</h2>
                                        <span className='fs-5'>10:30 AM</span>
                                        <h1>23°C</h1>
                                        <span>Mostly Sunny</span>
                                    </div>
                                    <div>
                                        <Image src={clearSky} fluid  width={120}/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="d-flex align-items-center">
                                    <HiOutlineLocationMarker className="me-2"/> 
                                    <span>Chiang Mai, Thailand</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <HiCalendarDateRange className="me-2"/>
                                    <span>December 29, 2022</span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Row className="mt-3 box-info g-3">
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <WiHumidity className="me-2"/>
                                            <span>UV index</span>
                                        </div>
                                        <h4>43%</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <TbUvIndex className="me-2"/>
                                            <span>Humidity</span>
                                        </div>
                                        <h4>43%</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <FaWind className="me-2"/>
                                            <span>Wind</span>
                                        </div>
                                        <h4>5 km/h</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <MdDewPoint className="me-2"/>
                                          <span>Dew point</span>  
                                        </div>
                                        <h4>9.66 km</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <CgPushDown className="me-2"/>
                                            <span>Pressure</span>
                                        </div>
                                        <h4>9.66 km</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="items-info">
                                    <Card.Body>
                                        <div className='d-flex align-items-center mb-2'>
                                            <MdOutlineVisibility className="me-2"/>
                                            <span>Visibility</span>
                                        </div>
                                        <h4>9.66 km</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Card className="sun-moon-card mt-3">
                            <Card.Body>
                                <h5>Sun & Moon Summary</h5>
                                <div>
                                    <span>Sunrise: 06:54 AM | Sunset: 18:30 PM</span>
                                </div>
                                <hr/>
                                <div>
                                    <span>Moonrise: 05:10 AM | Moonset: 18:20 PM</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="forecast-card">
                            <Card.Body>
                                <h5>10-Day Forecast</h5>
                                <Row>
                                    <Col md={12}>
                                        <div className="forecast-item mt-4">
                                            <div className="box-item">
                                                <div className="item">
                                                    <Image src={clearSky} fluid  width={60}/>
                                                    <div className="info-time">
                                                        <span>01:00 AM</span>
                                                        <span>Mostly Cloudy</span>
                                                    </div>
                                                    <div className="vr"></div>
                                                    <div className='info-weather'>
                                                        <span className="text-temp">23°C</span>
                                                        <div className="d-flex flex-column">
                                                            <span>Wind: 120 Km.</span>
                                                            <span>Humidity: 59%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="map-card mt-3">
                            <Card.Body>
                                <h5>Map</h5>
                                <div className="map-placeholder">
                                    [Map Placeholder]
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default WeatherDashboard;