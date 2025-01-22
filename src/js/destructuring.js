const destruct = ({ special }) => {
    return special.map(item => {
        const description = item.description || 'Описание недоступно'; 
        return { ...item, description }; 
    });
};

export default destruct;