import business from '../business/business.container';
import applicationException from "../service/applicationException";
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        try {
            const postData = request.body;
            if (!postData.title || !postData.image || !postData.text || !postData.rozmiar || !postData.price) {
                const error = applicationException.new(applicationException.BAD_REQUEST, 'Incomplete post data');
                throw error;
            }

            const result = await business.getPostManager(request).createNewOrUpdate(postData);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.put('/api/posts', async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).createNewOrUpdate(request.body);
            if (!result) {
                const error = applicationException.new(applicationException.NOT_FOUND, 'Post not found');
                throw error;
            }
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/posts/:id', async (request, response, next) => {
        let result = await business.getPostManager().query();
        response.status(200).send(result.find(obj => obj.id === request.params.id));
    });

    router.delete('/api/posts/:id', async (request, response, next) => {
        try {
            const postId = request.params.id;

            if (!postId) {
                const error = applicationException.new(applicationException.BAD_REQUEST, 'No ID provided');
                throw error;
            }

            if (!/^[0-9a-fA-F]{24}$/.test(postId)) {
                const error = applicationException.new(applicationException.BAD_REQUEST, 'Invalid ID format');
                throw error;
            }

            let result = await business.getPostManager().removePost(postId);
            if (!result) {
                const error = applicationException.new(applicationException.NOT_FOUND, 'Post not found');
                throw error;
            }

            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default postEndpoint;
