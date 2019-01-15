import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from './../api';
import { urlCustomers } from './../api/url';


const apiFetchCustomers = apiGet(urlCustomers);

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);