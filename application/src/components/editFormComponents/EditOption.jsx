import { React } from "react";
import { Form } from "react-bootstrap";
const EditOption = (props) => {
  const handleSelectEdit = (event, indicator) => {
    let selected = event.target.value;

    let selectedIndicator = indicator;
    props.handleSelectEdit(selected, selectedIndicator);
  };

  console.log(props.categories);

  return (
    <div className="edit-option-container">
      <Form.Select
        defaultValue={props.default}
        aria-label="Default select example"
        onChange={(event) => {
          handleSelectEdit(event, props.categoryType);
        }}
      >
        <option value={props.default} disabled>
          {props.default}
        </option>
        {props.categoryType === "parent"
          ? props.categories.map((category) => {
              return (
                <option key={category.id} value={category.category}>
                  {category.category}
                </option>
              );
            })
          : props.categoryType === "child"
          ? props.categories[0].map((category) => {
              return (
                <option key={category.id} value={category.subCategory}>
                  {category.subCategory}
                </option>
              );
            })
          : props.categoryType === "action"
          ? props.categories[0]
              .filter(
                (filteredChild) =>
                  filteredChild.subCategory === props.childValue
              )
              .map((category) => {
                return category.changeType;
              })
              .map((changeType) => {
                return (
                  <>
                    {changeType[0] !== undefined && changeType[0] !== null ? (
                      <option
                        key={changeType[0].id}
                        value={changeType[0].changeType}
                      >
                        {changeType[0].changeType}
                      </option>
                    ) : null}

                    {changeType[1] !== undefined && changeType[1] !== null ? (
                      <option
                        key={changeType[1].id}
                        value={changeType[1].changeType}
                      >
                        {changeType[1].changeType}
                      </option>
                    ) : null}
                    {changeType[2] !== undefined && changeType[2] !== null ? (
                      <option
                        key={changeType[2].id}
                        value={changeType[2].changeType}
                      >
                        {changeType[2].changeType}
                      </option>
                    ) : null}
                  </>
                );
              })
          : null}
      </Form.Select>
    </div>
  );
};

export default EditOption;
