import { Button, PageContainer } from '../../components/shared';

function Home() {
  return (
    <PageContainer>
      <div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">
              <Button title={'dsjdsjj'} type={'Link'}></Button>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
          <div className="row align-items-end">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { Home };
