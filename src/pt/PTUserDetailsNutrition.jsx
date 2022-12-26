import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/pt/userNutrition_weekly.json';

function PTUserDetailsNutrition() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: '16px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Plano de nutrição</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Plano de nutrição" />
            <Container fluid className='px-3'>
                {Data["done"].map((value, index) => {
                    return <Card className="off-white-background mt-3" key={index + 1}>
                        <Card.Body>
                            <Card.Title className='mb-0 semibold fs-6'><span className='bold text-success'>{value.weekday}</span> | {value.calories} kcal</Card.Title>
                            <Card.Text className='fs-7' as="div">
                                {value['meals'].map((value, index) => {
                                    return <div className='mt-2'>
                                        <span className='semibold'>
                                            <i className={'fa-regular fa-' + value.icon + ' dark-gray'} /> {value.type}
                                        </span><br />
                                        {value.name}<br />
                                        {value.calories} kcal | {value.protein}g proteína | {value.fat}g gordura
                                        <br />
                                    </div>
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}

                <Card className="off-white-background mt-3" key={Data["done"].length + 1}>
                    <Card.Body>
                        <Card.Title className='mb-0 semibold fs-6'><span className='bold'>{Data["actual"].weekday} (hoje)</span> | {Data["actual"].calories} kcal</Card.Title>
                        <Card.Text className='fs-7' as="div">
                            {Data['actual']['meals'].map((value, index) => {
                                return <div className='mt-2'>
                                    <span className='semibold'>
                                        <i className={'fa-regular fa-' + value.icon + ' dark-gray'} /> {value.type}
                                    </span><br />
                                    {value.name}<br />
                                    {value.calories} kcal | {value.protein}g proteína | {value.fat}g gordura
                                    <br />
                                </div>
                            })}
                            <Row>
                                <Col></Col>
                                <Col xs="auto">
                                    <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-pen-to-square white' />&nbsp;&nbsp;Editar</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                {Data["next"].map((value, index) => {
                    return <Card className="off-white-background mt-3" key={index + 1}>
                        <Card.Body>
                            <Card.Title className='mb-0 semibold fs-6'><span className='bold'>{value.weekday}</span> | {value.calories} kcal</Card.Title>
                            <Card.Text className='fs-7' as="div">
                                {value['meals'].map((value, index) => {
                                    return <div className='mt-2'>
                                        <span className='semibold'>
                                            <i className={'fa-regular fa-' + value.icon + ' dark-gray'} /> {value.type}
                                        </span><br />
                                        {value.name}<br />
                                        {value.calories} kcal | {value.protein}g proteína | {value.fat}g gordura
                                        <br />
                                    </div>
                                })}
                                <Row>
                                    <Col></Col>
                                    <Col xs="auto">
                                        <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-pen-to-square white' />&nbsp;&nbsp;Editar</Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}

                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-paper-plane white' />&nbsp;&nbsp;Submeter alterações</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default PTUserDetailsNutrition;