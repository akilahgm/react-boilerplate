import { TextInput } from '../../shared';

function AddPeopleForm() {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            validation={{ isInValid: false }}
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            validation={{ isInValid: false }}
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            validation={{ isInValid: false }}
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col mb-2">
          <TextInput
            placeholder={'House name'}
            className="add-people-input"
            labelText={'test name'}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
    </div>
  );
}

export { AddPeopleForm };
