import Navbar from '../navbar/navbarBack';
import { Container, Stack, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ClientBasicMeasuresChange() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Adicionar medidas</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Adicionar medidas" />
            <Container fluid className='px-3'>
                <Stack direction='vertical' gap={3} className="mb-3">
                <input type="number" step={0.1} className="form-control" placeholder="Peso (kg)" aria-label="Peso (kg)" />
                    <input type="number" step={0.1} className="form-control" placeholder="Abdominal (cm)" aria-label="Abdominal (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder="Antebraço (cm)" aria-label="Antebraço (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Braço (cm)' aria-label="Braço (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Costas (cm)' aria-label="Costas (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Coxas (cm)' aria-label="Coxas (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Gémeos (cm)' aria-label="Gémeos (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Peito (cm)' aria-label="Peito (cm)" />
                    <input type="number" step={0.1} className="form-control" placeholder='Rabo (cm)' aria-label="Rabo (cm)" />
                </Stack>
                <div className="text-center">
                    <Button className='btn primary-blue-background mx-auto'><i className='fa-solid fa-save white'></i>&nbsp;&nbsp;Guardar alterações</Button>
                </div>
            </Container>
        </div>
    )
}

export default ClientBasicMeasuresChange;