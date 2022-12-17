import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, Card, Stack, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClientRegister3() {
    return (
        <div style={{ height: 'calc(100vh - 58.64px)', paddingTop: '58.64px' }} className="d-flex align-items-center">
            <Navbar />
            <Container fluid className='px-3 text-center'>
                <div>
                    <h1>Registo</h1>
                    <h2 className="mb-5">Método de pagamento</h2>
                </div>
                <div className="vstack gap-3 col-12 mx-auto">
                    <Link to="/client/register/2" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <Stack direction='vertical' gap={3}>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Card.Text className='align-middle'>
                                    <Row>
                                        <Col><i className='fa-brands fa-apple-pay fa-2xl' style={{ color: 'black' }}></i></Col>
                                        <Col xs="auto"><i className='fa-regular fa-circle-dot dark-gray'></i></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Card.Text className='align-middle'>
                                    <Row>
                                        <Col><i className='fa-solid fa-credit-card dark-gray'></i>&nbsp;&nbsp;Cartão de débito ou crédito</Col>
                                        <Col xs="auto"><i className='fa-regular fa-circle'></i></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Card.Text className='align-middle'>
                                    <Row>
                                        <Col className='d-flex align-items-center'>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.28074 13.9583L1.22555 14.3906C1.21978 14.4369 1.22324 14.484 1.23574 14.529C1.24824 14.5741 1.26953 14.6162 1.29839 14.6529C1.32724 14.6897 1.36309 14.7204 1.40386 14.7432C1.44463 14.7661 1.48952 14.7806 1.53594 14.786H15.5862C15.6333 14.7866 15.6801 14.778 15.7238 14.7605C15.7676 14.743 15.8075 14.7171 15.8412 14.6842C15.8749 14.6514 15.9019 14.6122 15.9204 14.5689C15.939 14.5256 15.9489 14.4791 15.9495 14.432C15.9507 14.4174 15.9507 14.4028 15.9495 14.3883L15.892 13.956C15.8759 13.7943 15.9244 13.6327 16.0269 13.5065C16.1294 13.3803 16.2776 13.2998 16.4392 13.2824C16.5185 13.2737 16.5987 13.2808 16.6752 13.3032C16.7517 13.3256 16.8231 13.3628 16.8852 13.4128C16.9473 13.4627 16.999 13.5244 17.0373 13.5944C17.0756 13.6643 17.0997 13.7411 17.1083 13.8204L17.1635 14.2411C17.2715 15.1769 16.7404 16 15.784 16H1.3819C0.434638 16 -0.0941735 15.1769 0.0138879 14.2411L0.0690681 13.8204C0.0771055 13.7415 0.100624 13.665 0.138277 13.5953C0.175929 13.5255 0.226975 13.4639 0.288488 13.4139C0.350002 13.364 0.420774 13.3266 0.496748 13.304C0.572723 13.2815 0.652406 13.2741 0.731231 13.2824C0.893053 13.3003 1.04126 13.3814 1.14371 13.5079C1.24615 13.6345 1.29456 13.7963 1.27844 13.9583" fill="#333333" />
                                                <path d="M14.2251 10.7096C14.529 10.7259 14.8269 10.621 15.0536 10.4181C15.2803 10.2151 15.4173 9.93047 15.4345 9.62666C15.4356 9.60674 15.4356 9.58679 15.4345 9.56688C15.4207 8.89782 14.8114 8.46557 14.1332 8.46327H12.7606C12.6081 8.46327 12.4619 8.40271 12.3541 8.29492C12.2463 8.18712 12.1858 8.04092 12.1858 7.88847C12.1858 7.73603 12.2463 7.58983 12.3541 7.48203C12.4619 7.37424 12.6081 7.31368 12.7606 7.31368H13.6802C14.2987 7.28839 14.7746 6.91362 14.8045 6.33193C14.8344 5.70425 14.2964 5.23522 13.6411 5.23522H11.4155V10.7004H14.2251M15.9104 6.33193C15.9114 6.57175 15.8646 6.80936 15.7726 7.03084C15.6806 7.25232 15.5453 7.45322 15.3747 7.62177L15.3402 7.66086L15.3862 7.68845C15.7224 7.87538 16.0049 8.14579 16.2062 8.4736C16.4076 8.8014 16.5211 9.17555 16.5358 9.55998C16.5438 10.167 16.3114 10.7526 15.8893 11.189C15.4672 11.6253 14.8896 11.877 14.2826 11.889H10.8338C10.6743 11.8866 10.5221 11.8212 10.4106 11.7071C10.299 11.593 10.2371 11.4394 10.2384 11.2798V4.7202C10.2371 4.63974 10.252 4.55985 10.2822 4.48524C10.3123 4.41064 10.3571 4.34283 10.4139 4.28582C10.4707 4.22881 10.5383 4.18376 10.6128 4.15333C10.6873 4.12289 10.7672 4.10769 10.8476 4.10862H13.6411C14.2264 4.09254 14.7942 4.30942 15.2196 4.71163C15.6451 5.11384 15.8936 5.6685 15.9104 6.25376V6.32963" fill="#333333" />
                                                <path d="M5.00311 9.64504L5.0192 9.69102L5.0353 9.64504C5.19164 9.21279 5.38247 8.72537 5.5825 8.21265C5.78253 7.69993 5.99635 7.13893 6.20098 6.63771C6.40561 6.13649 6.60563 5.67665 6.79417 5.2812C6.91828 4.98935 7.07239 4.71118 7.254 4.45119C7.3425 4.3413 7.45509 4.25325 7.58307 4.19384C7.71105 4.13444 7.85098 4.10528 7.99204 4.10861H8.13229C8.29173 4.10197 8.44829 4.15252 8.57373 4.25116C8.67002 4.33101 8.73246 4.44439 8.74847 4.56845L9.62446 11.351C9.62802 11.4261 9.61664 11.5011 9.59099 11.5718C9.56534 11.6424 9.52591 11.7073 9.47501 11.7626C9.35641 11.8619 9.20395 11.9113 9.04966 11.9005C8.89212 11.9094 8.73631 11.8639 8.60822 11.7718C8.55162 11.7331 8.50404 11.6827 8.46872 11.624C8.43341 11.5653 8.41119 11.4996 8.40359 11.4315C8.3737 11.2016 8.34841 10.9556 8.32082 10.6797C8.29323 10.4038 8.14608 9.22429 8.107 8.9231C8.06791 8.6219 7.8265 6.70209 7.74143 6.00544V5.94566L7.46093 6.53425C7.36666 6.73658 7.2632 6.97799 7.15054 7.26079C7.03788 7.54359 6.92062 7.84248 6.81256 8.15977C6.7045 8.47706 6.1481 10.0129 6.1481 10.0129C6.09752 10.1532 6.00095 10.436 5.91818 10.7027C5.83541 10.9694 5.75034 11.197 5.72965 11.2407C5.63478 11.4263 5.47009 11.5667 5.27176 11.6309C5.07343 11.6952 4.85771 11.678 4.67203 11.5832C4.52088 11.5078 4.39767 11.3862 4.32025 11.2361C4.29726 11.1924 4.21909 10.9579 4.12942 10.6981C4.03975 10.4383 3.95238 10.1578 3.8995 10.0083C3.8995 10.0083 3.35919 8.45866 3.23734 8.15517C3.11548 7.85168 3.00742 7.54129 2.89936 7.25619C2.7913 6.97109 2.68094 6.73198 2.58897 6.52965L2.30617 5.94796V6.00774C2.2211 6.69749 1.97739 8.61961 1.9383 8.9254C1.89922 9.23119 1.75667 10.3992 1.72448 10.6728C1.69229 10.9464 1.667 11.1993 1.63941 11.4246C1.63181 11.4927 1.60959 11.5584 1.57428 11.6171C1.53896 11.6758 1.49138 11.7262 1.43478 11.7649C1.30732 11.8565 1.15241 11.9019 0.995639 11.8936C0.842811 11.9039 0.691958 11.8545 0.57489 11.7557C0.523985 11.7004 0.484563 11.6355 0.458909 11.5649C0.433255 11.4942 0.42188 11.4192 0.425443 11.3441L1.28993 4.56845C1.30999 4.44909 1.37295 4.34117 1.46697 4.26496C1.59016 4.16081 1.74713 4.10522 1.90841 4.10861H2.04866C2.18839 4.10516 2.32706 4.13359 2.45415 4.19176C2.58123 4.24992 2.69339 4.33629 2.7821 4.44429C2.96456 4.70376 3.11872 4.98201 3.24194 5.2743C3.43047 5.66976 3.6282 6.12193 3.83512 6.63081C4.04205 7.1397 4.24898 7.66468 4.4559 8.20575C4.65593 8.72537 4.84446 9.2059 5.00081 9.63814" fill="#333333" />
                                                <path d="M3.28792 0.00689753H13.9239C14.9264 0.00689753 15.4253 0.758729 15.5333 1.75198L15.5793 2.06926C15.5974 2.23351 15.5498 2.39824 15.4468 2.52748C15.3439 2.65673 15.194 2.73996 15.0298 2.75902C14.8687 2.77178 14.7091 2.72053 14.5856 2.61636C14.4621 2.5122 14.3846 2.36354 14.37 2.20261L14.324 1.89682C14.2803 1.51976 14.1216 1.22776 13.7377 1.22776H3.47645C3.09249 1.22776 2.93384 1.51976 2.88786 1.89682L2.84647 2.19802C2.83188 2.35919 2.75399 2.50801 2.62987 2.61187C2.50576 2.71573 2.34554 2.76616 2.18431 2.75212C2.10291 2.74297 2.02412 2.71787 1.95243 2.67824C1.88075 2.63862 1.81758 2.58524 1.76654 2.52118C1.7155 2.45711 1.6776 2.38362 1.65499 2.30489C1.63239 2.22616 1.62553 2.14375 1.63481 2.06236L1.67849 1.74508C1.79805 0.754131 2.29467 0 3.28792 0" fill="#333333" />
                                            </svg>
                                            &nbsp;&nbsp;MB WAY</Col>
                                        <Col xs="auto"><i className='fa-regular fa-circle'></i></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Card.Text className='align-middle'>
                                    <Row>
                                        <Col><i className='fa-brands fa-paypal dark-gray'></i>&nbsp;&nbsp;PayPal</Col>
                                        <Col xs="auto"><i className='fa-regular fa-circle'></i></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                    <div className="mx-auto">
                        <Link to="/client/home" type="button" className="btn primary-blue-background white">Concluir registo</Link>
                    </div>
                </div>
            </Container>
            <Footer actor="client" />
        </div>
    );
}

export default ClientRegister3;