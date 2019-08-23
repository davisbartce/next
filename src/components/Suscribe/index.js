import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { saveSuscriber } from '../../redux/actions';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/ArrowUpwardSharp';

const styles = theme => {
  return ({
    backGrounWave: {
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    },
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '0px 10%'
    },
    centeredText: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    mainTittle: {
      fontSize: '2rem',

    },
    mainTittleH1: {
      color: 'white',
      fontFamily: 'RotisSemiSerifStd',
      width: '600px',
      [theme.breakpoints.down('xs')]: {
        width: '90%',
        fontSize: '2.5rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
        width: '90%',
      },
    },
    subTittleMain: {
      color: 'white',
      fontFamily: 'RotisSemiSerifStd',
      lineHeight: '1.2'
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      [theme.breakpoints.down('xs')]: {
        width: '250px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '250px',
      },
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
    formRedux: {
      marginTop: '20px'
    },
    socialIcon: {
      margin: '5px'
    },
    errorForm: {
      color: '#ff5b5b',
      paddingTop: '10px'
    },
    marinTopContainer: {
      marginTop: '10%',
      textAlign: 'center'
    },
    borderNonRadius: {
    }
  })
}

const required = value => (value || typeof value === 'number' ? undefined : 'Requerido')
const emailSuscribe = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email Invalido'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Numero de teléfono, debe tener 10 dígitos'
    : undefined

const renderField = ({ input, label, inputAdorment, type, meta: { touched, error, warning } }) => (
  <div className='inputFormSuscribe'>

    {/* <input
      className={'inputSuscribe'}
      placeholder={label}
      type="text"
      {...input}
    /> */}
    <InputBase
      className={(classes.input, classes.borderNonRadius)}
      placeholder={label}
      inputProps={{ 'aria-label': 'Email address' }}
      type="text"
      {...input}
    />
    {touched &&
      ((error && <div className={'errorForm'}>{error}</div>) ||
        (warning && <div className={'errorForm'}>{warning}</div>))}
  </div>
)

const renderFieldMaterial = ({ input, label, inputAdorment, type, meta: { touched, error, warning }, classes, submitting }) => (
  <div>
    <Paper className={classes.root}>
      <InputBase
        className={(classes.input)}
        placeholder="Email address"
        inputProps={{ 'aria-label': 'Email address' }}
        type="text"
        {...input}
      />
      <IconButton className={classes.iconButton} aria-label="Search" type={'submit'} disabled={submitting}>
        <SearchIcon />
      </IconButton>
    </Paper>
    {touched &&
      ((error && <div className={classes.errorForm}>{error}</div>) ||
        (warning && <div className={classes.errorForm}>{warning}</div>))}
  </div>
)



class SuscribeSection extends Component {
  async handleSubmit(values) {
    await this.props.saveSuscriber(Object.assign({}, values, { date: new Date() }));
    this.props.reset();
  }
  render() {
    const { classes, handleSubmit, submitting } = this.props
    return (
      <div id={'inicio'} className={classes.backGrounWave}
        style={{
          backgroundImage: 'url(/static/back.png)',
        }}>

        <div className={classes.mainContent}>
          <div style={{ flex: 1 }}>
            <div className={classes.marinTopContainer}>
              <Grow in={true} timeout={1000}>
                <img width={70} src={'/static/logo_jaque.png'} />
              </Grow>
              <Grow in={true} timeout={2500}>
                <div className={classes.centeredText}>
                  <br />
                  <Typography className={classes.mainTittleH1} variant="h2" component="h1" gutterBottom>
                    Wait to see how much you can grow with us.
      </Typography>
                  <Typography className={classes.subTittleMain} variant="subtitle1" gutterBottom>
                    We´re doing some work on this site,<br />
                    we let you know when it´s ready.
      </Typography>
                  <div className={classes.formRedux}>
                    <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                      <Field
                        name="email"
                        validate={[required, emailSuscribe]}
                        component={renderFieldMaterial}
                        label="Email address"
                        classes={classes}
                        submitting={submitting}
                      />
                    </form>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <Typography className={classes.subTittleMain} variant="subtitle1" gutterBottom >
                      Check our projects.
      </Typography>
                  </div>
                  <div>
                    <a href={'https://www.facebook.com/jaqueconsultants'} target={'blank'}>

                      <img className={classes.socialIcon} width={25} src={'/static/fb.png'} />
                    </a>
                    <a href={'https://instagram.com/jaque_consultants?igshid=fyq4ehbyahy1'} target={'blank'}>
                    <img className={classes.socialIcon} width={25} src={'/static/inst.png'} />
                    </a>
                  </div>

                </div>

              </Grow>
            </div>


          </div>

        </div>
      </div>
    )
  }

}
const maStateToProps = ({ commingSoon }) => {
  return { commingSoon }
}

const mapDispatchToProps = {
  saveSuscriber
}

SuscribeSection = connect(
  maStateToProps,
  mapDispatchToProps
)(SuscribeSection)

export default withStyles(styles)(reduxForm({
  form: 'suscriberForm',
})(SuscribeSection));