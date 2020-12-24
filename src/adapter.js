/**
 * 自定义上传设配器。
 *
 */
export class CustomUploadAdapter {
  constructor(loader, owner) {
    this.loader = loader;
    this.owner = owner;
  }

  /**
     * 把文件转换成 objectURL
     */
  async upload() {
    let blob = await this.loader.file;
    let url = URL.createObjectURL(blob);
    if (!this.owner.images) {
      this.owner.images = {};
    }
    this.owner.images[url] = blob;
    return new Promise((resolve) => {
      resolve({
        default: url,
      });
    });
  }
}
