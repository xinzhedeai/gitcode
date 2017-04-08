package normalMapper;

import java.util.List;
import normalPo.OptionBlogInfo;
import normalPo.OptionBlogInfoExample;
import org.apache.ibatis.annotations.Param;

public interface OptionBlogInfoMapper {
    int countByExample(OptionBlogInfoExample example);

    int deleteByExample(OptionBlogInfoExample example);

    int deleteByPrimaryKey(String blogOptId);

    int insert(OptionBlogInfo record);

    int insertSelective(OptionBlogInfo record);

    List<OptionBlogInfo> selectByExample(OptionBlogInfoExample example);

    OptionBlogInfo selectByPrimaryKey(String blogOptId);

    int updateByExampleSelective(@Param("record") OptionBlogInfo record, @Param("example") OptionBlogInfoExample example);

    int updateByExample(@Param("record") OptionBlogInfo record, @Param("example") OptionBlogInfoExample example);

    int updateByPrimaryKeySelective(OptionBlogInfo record);

    int updateByPrimaryKey(OptionBlogInfo record);
}