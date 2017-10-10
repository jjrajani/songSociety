module.exports = {
    sortByPromoted: comments => {
        return comments.reduce((a, b) => {
            if (b.isPromoted === true) {
                a.unshift(b);
            } else {
                a.push(b);
            }
            return a;
        }, []);
    },
    togglePromoted: (comments, isPromotedId) => {
        return comments.map(c => {
            if (c._id != isPromotedId) {
                c.isPromoted = false;
                c.save();
                return c;
            } else {
                c.isPromoted = true;
                c.save();
                return c;
            }
        });
    }
};
