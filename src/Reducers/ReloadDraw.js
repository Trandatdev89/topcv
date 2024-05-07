function ReloadDraw(state=false,action){
    switch (action.type) {
        case "reload":
          return action.value;
        default:
          return state;
      }
}

export default ReloadDraw;