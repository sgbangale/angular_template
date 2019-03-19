export const entityActiveCount = {
  request_data: {
    filters: { entity_active: true },
    sortFields: 'entity_code',
    removeColumns: '-entity_code -entity_name -__v -_id -entity_access -entity_schema -entity_active',
    first: 0,
    rows: 10
  }
};

export const activeEntityAccessCount = {
  request_data: {
    filters: { entity_access_active: true },
    sortFields: 'entity_code',
    removeColumns: '-entity_access_js -__v -_id -entity_code -entity_access_code -entity_access_active',
    first: 0,
    rows: 200
  }
};


export const activeEntities = {
  request_data: {
    filters: { entity_active: true },
    sortFields: 'entity_code',
    removeColumns: '',
    first: 0,
    rows: 10
  }
};
