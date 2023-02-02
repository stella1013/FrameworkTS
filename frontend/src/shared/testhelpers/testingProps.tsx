export const initialStateLoaded = {
    clientState: {
      appTitle: 'Clear Health Rx',
      selectedView: 'SPLASH_SCREEN',
      showVoucherModal: false,
      openAutocompletes: '',
      isVoucherReady: false,
      voucherModalType: 'NONE',
      isConfirmationVisible: false,
      voucherUrl: {
        pharmacy: {
          name: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          latitude: 0,
          longitude: 0,
          hoursOfOperation: '',
          phone: '',
          npi: '',
          distance: 0,
          nabp: null,
          listingSlug: null,
          pharmacyLogo: {
            imgUrl: '',
            imgStyle: '',
            brand: '',
            url: ''
          }
        },
        drug: {
          ndcCode: '',
          brandGenericIndicator: '',
          quantity: 0,
          labelName: '',
          form: '',
          strength: '',
          pda: '',
          ps: 0,
          ds: 0
        },
        pricing: {
          price: 0,
          group: '',
          bin: '',
          pcn: '',
          couponCode: ''
        }
      }
    },
    sBar: {
      formName: 'searchBarFormReducer',
      dataCopiedFrom: 'searchBarFormReducer',
      isReady: true,
      formIsValid: false,
      invalidSubmit: false,
      form: {
        formValues: {
          searchTypeValue: {
            elementType: 'input',
            elementSize: 'col-5-of-8',
            elementConfig: {
              type: 'text',
              placeholder: 'Search For a Drug Name',
              isAutocomplete: true
            },
            selectedValue: {
              value: '',
              displayValue: ''
            },
            validation: {
              required: true,
              errorMessage: 'Please Enter a Drug Name'
            },
            valid: false,
            touched: false
          },
          zipCodeValue: {
            elementType: 'input',
            elementSize: 'col-2-of-8',
            elementConfig: {
              type: 'text',
              placeholder: 'Enter Zip Code',
              isAutocomplete: false
            },
            selectedValue: {
              value: '',
              displayValue: ''
            },
            validation: {
              required: true,
              minLength: 5,
              maxLength: 5,
              errorMessage: 'Please Enter a 5 Digit ZipCode'
            },
            valid: false,
            touched: false
          }
        }
      }
    },
    sBarExtended: {
      formName: '',
      dataCopiedFrom: '',
      isReady: false,
      formIsValid: false,
      invalidSubmit: false,
      form: {
        formValues: {}
      }
    },
    emailBar: {
      formName: '',
      dataCopiedFrom: '',
      isReady: false,
      formIsValid: false,
      invalidSubmit: false,
      form: {
        formValues: {
          emailTypeValue: {
            elementType: 'input',
            elementSize: 'col-6-of-8',
            elementConfig: {
              type: 'text',
              placeholder: 'Enter Email Address',
              isAutocomplete: false
            },
            selectedValue: {
              value: '',
              displayValue: ''
            },
            validation: {
              required: true,
              errorMessage: 'Enter Email Address',
              isEmail: true
            },
            valid: false,
            touched: false
          }
        }
      }
    },
    textBar: {
      formName: '',
      dataCopiedFrom: '',
      isReady: false,
      formIsValid: false,
      invalidSubmit: false,
      form: {
        formValues: {
          phoneTypeValue: {
            elementType: 'input',
            elementSize: 'col-6-of-8',
            elementConfig: {
              type: 'number',
              placeholder: 'Enter Phone Number...',
              isAutocomplete: false
            },
            selectedValue: {
              value: '',
              displayValue: 'Enter Phone Number...'
            },
            validation: {
              required: true,
              errorMessage: 'Please Enter a Valid Phone Number',
              isPhone: true
            },
            valid: true,
            touched: false
          }
        }
      }
    },
    data: {
      dataIsPending: false,
      dataIsComplete: false,
      autocompleteData: [
        ''
      ],
      autocompleteDataIsPending: false,
      autocompleteDataIsComplete: false,
      emailVoucherResponse: {
        status: '',
        message: ''
      },
      textVoucherResponse: {
        status: '',
        message: ''
      }
    }
  };