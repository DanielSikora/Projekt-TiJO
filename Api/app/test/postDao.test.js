const mongoose = require('mongoose');
const postDao = require('../path_to_post_dao_file');

// Przygotowanie danych testowych
const samplePostData = {
  title: 'Sample Title',
  image: 'sample-image.jpg',
  text: 'Sample text',
  rozmiar: 10,
  price: 20
};

describe('Post DAO', () => {
  beforeAll(async () => {
    // Połączenie z bazą danych przed uruchomieniem testów
    await mongoose.connect(config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Rozłączenie z bazą danych po zakończeniu testów
    await mongoose.connection.close();
  });

  describe('query()', () => {
    it('should return list of posts', async () => {
      // Tworzenie przykładowego posta w bazie danych
      await postDao.model.create(samplePostData);

      const result = await postDao.query();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('get()', () => {
    it('should return specific post details by ID', async () => {
      const createdPost = await postDao.model.create(samplePostData);

      const result = await postDao.get(createdPost._id);
      expect(result).toBeDefined();
      expect(result.title).toBe(samplePostData.title);
    });
  });

  describe('createNewOrUpdate()', () => {
    it('should create a new post', async () => {
      const result = await postDao.createNewOrUpdate(samplePostData);
      expect(result).toBeDefined();
      expect(result.title).toBe(samplePostData.title);
    });
  });

  describe('removePost()', () => {
    it('should remove a specific post', async () => {
      const createdPost = await postDao.model.create(samplePostData);

      const result = await postDao.removePost(createdPost._id);
      expect(result.deletedCount).toBe(1);
    });
  });
});
