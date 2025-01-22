const destruct = ({ special }) => {
    return special.map( ({ description = 'Описание недоступно',...item })=> {
        return { ...item, description }; 
    });
};

export default destruct;