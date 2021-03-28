const ListView = ({ list=[], render }) => {
    return list.map((item) => {
        return <>{render(item)}</>
    });
};

export default ListView;