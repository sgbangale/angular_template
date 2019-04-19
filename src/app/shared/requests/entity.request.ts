export const entityActiveCount = {
  request_data: {
    filters: { },
    sortFields: 'entity_code',
    removeColumns: '-entity_code -entity_name -__v -_id -entity_access -entity_schema -entity_active',
    first: 0,
    rows: 10
  }
};

export const activeEntityAccessCount = {
  request_data: {
    filters: {   },
    sortFields: 'entity_code',
    removeColumns: '-entity_access_js -__v -_id -entity_code -entity_access_code -entity_access_active',
    first: 0,
    rows: 200
  }
};


export const activeEntities = {
  request_data: {
    filters: {  },
    sortFields: 'entity_code',
    removeColumns: '',
    first: 0,
    rows: 10
  }
};

export const activeEntitiyDetails = {
  request_data: {
    filters: {  },
    sortFields: 'entity_code',
    removeColumns: '',
    first: 0,
    rows: 10
  }
};


export const entityAccessDetails = {
  'request_data'	: {
  'filters': {},
  'sortFields': 'entity_code',
  'removeColumns': '',
  'first': 0,
  'rows': 0
  }
  };

export const entityAccess = {
  'request_data'	: {
  'filters': {},
  'sortFields': 'entity_code',
  'removeColumns': '-entity_access_js',
  'first': 0,
  'rows': 200
  }
  };
export const entityCreate = {
  'request_data' : {
    'entity_code' : '',
    'entity_name' : '',
    'entity_access': [''],
    'entity_active': true,
    'entity_schema': {
    }
  }
  };

  export const entityList = {
    request_data: {
      filters: { },
      sortFields: 'entity_code',
      removeColumns: ' -entity_build -entity_name -__v -_id -entity_access -entity_active',
      first: 0,
      rows: 0
    }
  };
export const entityBuild = {
  'request_data' : {
    'entityId': ''
  }
  };
  export const entityAccessBuild = {
    'request_data' : {
      'entityAccessId': ''
    }
    };
