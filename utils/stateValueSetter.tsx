import _ from "lodash"

const onInputChange = (event: any, state: any, setState: any) => {
  const { name, value } = event.target

  let newCurrentVariable = structuredClone(state)
  _.set(newCurrentVariable, name, value)

  setState(newCurrentVariable)
}

export { onInputChange }
