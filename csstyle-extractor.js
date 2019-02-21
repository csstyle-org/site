class CsstyleExtractor {
  static extract(content) {
    let extracted = content.match(/[^\s<>'"]+/g) || [];

    return extracted;
  }
}

module.exports = CsstyleExtractor;
