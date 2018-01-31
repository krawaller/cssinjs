export const typography = {
  h2: {
    fontFamily: 'Verdana',
    fontSize: '14px'
  }
};

export const explanationBlock = {
  box: {
    borderRadius: "15px",
    padding: "10px",
    border: '2px solid springgreen',
    backgroundColor: 'moccasin',
    color: 'magenta'
  },
  headline: {
    fontWeight: "normal",
    letterSpacing: "5px",
    paddingLeft: "15px",
    fontStyle: "italic",
    ...typography.h2
  }
};
